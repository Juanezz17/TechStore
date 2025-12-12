export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				Nuestra empresa
			</h1>

			<img
				src='../../../public/img/about.png'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

			<div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
				<p>
					TechStore es una tienda en línea que se dedica a la
					venta de Tecnologia, fundada en 2025. Nuestro objetivo es
					ofrecer a nuestros clientes la mejor calidad y precio en
					Tecnologia. Contamos con un equipo de profesionales que se
					encargan de seleccionar los mejores productos para ti.
				</p>

				<p>
					En TechStore podrás encontrar una amplia variedad de
					Productos Tecnologicos de las mejores marcas. Además, contamos con
					promociones y descuentos exclusivos para que puedas comprar
					lo que quieras al mejor precio.
				</p>

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
					¡No esperes más y encuentra la mejor tecnología en TechStore!
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico: 
					<br />
					<a 
						href='https://mail.google.com/mail/?view=cm&fs=1&to=techstore2507@gmail.com&su=Consulta desde la web' 
						target='_blank'
						rel='noopener noreferrer'
					>
						techstore2507@gmail.com 
					</a>{' '}
					o escribiendo al{' '}
					<a 
						href='https://wa.me/573102346321?text=Hola, estoy interesado en sus productos' 
						target='_blank'
						rel='noopener noreferrer'
					>
						3102346321
					</a>
				</p>
			</div>
		</div>
	);
};
