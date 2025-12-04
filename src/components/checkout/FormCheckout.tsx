import { useForm } from 'react-hook-form';
import { InputAddress } from './InputAddress';
import {
	AddressFormValues,
	addressSchema,
} from '../../lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { ItemsCheckout } from './ItemsCheckout';
import { useCreateOrder } from '../../hooks';
import { useCartStore } from '../../store/cart.store';
import { ImSpinner2 } from 'react-icons/im';

export const FormCheckout = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AddressFormValues>({
		resolver: zodResolver(addressSchema),
	});

	const { mutate: createOrder, isPending } = useCreateOrder();

	const cleanCart = useCartStore(state => state.cleanCart);
	const cartItems = useCartStore(state => state.items);
	const totalAmount = useCartStore(state => state.totalAmount);

	const onSubmit = handleSubmit(data => {
		const orderInput = {
			address: data,
			cartItems: cartItems.map(item => ({
				variantId: item.variantId,
				quantity: item.quantity,
				price: item.price,
			})),
			totalAmount,
		};

		createOrder(orderInput, {
			onSuccess: () => {
				cleanCart();
			},
		});
	});

	if (isPending) {
		return (
			<div className='flex flex-col gap-3 h-screen items-center justify-center'>
				<ImSpinner2 className='animate-spin h-10 w-10' />
				<p className='text-sm font-medium'>Estamos procesando tu pedido</p>
			</div>
		);
	}

	return (
		<div>
			<form className='flex flex-col gap-6' onSubmit={onSubmit}>

				{/* SECCIÓN DE ENTREGA */}
				<div className='flex flex-col gap-3'>
					<h3 className='text-lg font-semibold tracking-normal text-gray-900'>
						Entrega
					</h3>

					<InputAddress
						register={register}
						errors={errors}
						name='addressLine1'
						placeholder='Dirección principal'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='addressLine2'
						placeholder='Dirección adicional (Opcional)'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='state'
						placeholder='Departamento / Estado'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='city'
						placeholder='Ciudad'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='postalCode'
						placeholder='Código Postal (Opcional)'
					/>

					<select
						className='border border-slate-200 rounded-md p-3'
						{...register('country')}
					>
						<option value='Colombia'>Colombia</option>
					</select>
				</div>

				{/* MÉTODO DE ENVÍO */}
				<div className='flex flex-col gap-3'>
					<p className='text-sm font-medium text-gray-800'>Métodos de envío</p>

					<div className='flex justify-between items-center text-sm border border-gray-300 bg-white py-4 rounded-md px-6 shadow-sm'>
						<span className='font-normal text-gray-700'>Envío estándar</span>
						<span className='font-semibold text-gray-900'>Gratis</span>
					</div>
				</div>

				{/* PAGO POR TRANSFERENCIA */}
				<div className='flex flex-col'>
					<div className='flex justify-between items-center text-sm border border-gray-300 bg-gray-50 py-4 rounded-t-md px-6'>
						<span className='font-medium text-gray-800'>Depósito Bancario</span>
					</div>

					<div className='bg-white text-[13px] p-5 space-y-2 border border-gray-300 border-t-0 rounded-b-md shadow-sm'>
						<p className='text-gray-700 leading-5'>
							Realiza el pago mediante transferencia bancaria a la siguiente cuenta:
						</p>

						<div className='pt-1 space-y-1.5'>
							<p><strong className='text-gray-900'>Banco:</strong> Bancolombia</p>
							<p><strong className='text-gray-900'>Titular:</strong> TechStore</p>
							<p><strong className='text-gray-900'>NIT:</strong> 901234567-8</p>
							<p><strong className='text-gray-900'>Tipo de cuenta:</strong> Ahorros</p>
							<p><strong className='text-gray-900'>Número de cuenta:</strong> 12345678901</p>
						</div>

						<p className='text-gray-600 text-[12px] pt-2 leading-4'>
							Una vez finalizada la compra recibirás un correo con esta información
							y los pasos para confirmar tu pago.
						</p>
					</div>
				</div>

				{/* RESUMEN DEL PEDIDO */}
				<div className='flex flex-col gap-6'>
					<h3 className='font-semibold text-2xl text-gray-900'>
						Resumen del pedido
					</h3>

					<div className='bg-white border border-gray-300 rounded-md shadow-sm p-4'>
						<ItemsCheckout />
					</div>
				</div>

				{/* BOTÓN DE ENVÍO */}
				<button
					type='submit'
					className='bg-black hover:bg-gray-900 text-white py-3.5 font-semibold tracking-wide rounded-md mt-2 transition-all shadow-sm'
				>
					Finalizar Pedido
				</button>
			</form>
		</div>
	);
};
