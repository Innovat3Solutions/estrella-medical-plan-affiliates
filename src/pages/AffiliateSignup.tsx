import { ShieldCheck, CheckCircle2, TrendingUp, DollarSign, Users, Zap, Award, Star, Stethoscope, Smile, Eye, FlaskConical, Laptop } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Locations } from '../components/Locations';
import { useLanguage } from '../context/LanguageContext';

export function AffiliateSignup() {
    const { language } = useLanguage();
    const scriptLoaded = useRef(false);
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    // Services data for the interactive selector
    const services = [
        {
            id: 'primary-care',
            icon: <Stethoscope className="w-5 h-5" />,
            title: language === 'es' ? 'Cuidado Primario' : 'Primary Care',
            shortDesc: language === 'es' ? 'Consultas médicas ilimitadas' : 'Unlimited medical visits',
            image: '/assets/images/nside-a-south-florida-primary-care.webp',
            description: language === 'es'
                ? 'Acceso ilimitado a consultas con médicos de atención primaria. Nuestros doctores brindan atención personalizada para todas las edades.'
                : 'Unlimited access to primary care physician visits. Our doctors provide personalized care for all ages.',
            bullets: language === 'es'
                ? ['Consultas sin límite', 'Atención preventiva', 'Manejo de enfermedades crónicas', 'Exámenes físicos anuales', 'Recetas médicas', 'Seguimiento continuo']
                : ['Unlimited visits', 'Preventive care', 'Chronic disease management', 'Annual physical exams', 'Prescriptions', 'Continuous follow-up']
        },
        {
            id: 'telemedicine',
            icon: <Laptop className="w-5 h-5" />,
            title: language === 'es' ? 'Telemedicina 24/7' : 'Telemedicine 24/7',
            shortDesc: language === 'es' ? 'Atención virtual cuando la necesites' : 'Virtual care when you need it',
            image: '/assets/images/telemedicine.webp',
            description: language === 'es'
                ? 'Consultas médicas virtuales disponibles las 24 horas del día, los 7 días de la semana. Atención desde la comodidad de tu hogar.'
                : 'Virtual medical consultations available 24 hours a day, 7 days a week. Care from the comfort of your home.',
            bullets: language === 'es'
                ? ['Disponible 24/7', 'Sin tiempos de espera', 'Desde cualquier lugar', 'Recetas electrónicas', 'Seguimiento por video', 'Atención inmediata']
                : ['Available 24/7', 'No wait times', 'From anywhere', 'E-prescriptions', 'Video follow-up', 'Immediate care']
        },
        {
            id: 'specialists',
            icon: <Users className="w-5 h-5" />,
            title: language === 'es' ? 'Especialistas' : 'Specialists',
            shortDesc: language === 'es' ? 'Más de 15 especialidades médicas' : 'Over 15 medical specialties',
            image: '/assets/images/endocrinologist-reviewing-lab.webp',
            description: language === 'es'
                ? 'Red completa de especialistas médicos incluyendo cardiología, dermatología, neurología y más. Referidos directos sin complicaciones.'
                : 'Complete network of medical specialists including cardiology, dermatology, neurology and more. Direct referrals without complications.',
            bullets: language === 'es'
                ? ['Cardiología', 'Dermatología', 'Neurología', 'Ortopedia', 'Gastroenterología', 'Y muchos más']
                : ['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 'Gastroenterology', 'And many more']
        },
        {
            id: 'labs',
            icon: <FlaskConical className="w-5 h-5" />,
            title: language === 'es' ? 'Laboratorios Básicos' : 'Basic Lab Work',
            shortDesc: language === 'es' ? 'Análisis clínicos incluidos' : 'Clinical tests included',
            image: '/assets/images/lab-technician-drawing-blood.webp',
            description: language === 'es'
                ? 'Análisis de laboratorio esenciales incluidos en tu plan. Resultados rápidos y precisos para monitorear tu salud.'
                : 'Essential laboratory tests included in your plan. Fast and accurate results to monitor your health.',
            bullets: language === 'es'
                ? ['Análisis de sangre', 'Panel metabólico', 'Perfil lipídico', 'Glucosa', 'Resultados rápidos', 'Sin costo adicional']
                : ['Blood work', 'Metabolic panel', 'Lipid profile', 'Glucose tests', 'Fast results', 'No additional cost']
        },
        {
            id: 'dental',
            icon: <Smile className="w-5 h-5" />,
            title: language === 'es' ? 'Cuidado Dental' : 'Dental Care',
            shortDesc: language === 'es' ? 'Limpiezas y tratamientos' : 'Cleanings and treatments',
            image: '/assets/images/dentist-performing-routine-dental-checkup.webp',
            description: language === 'es'
                ? 'Cuidado dental completo incluyendo limpiezas, extracciones, y tratamientos. Mantén tu sonrisa saludable.'
                : 'Complete dental care including cleanings, extractions, and treatments. Keep your smile healthy.',
            bullets: language === 'es'
                ? ['2 limpiezas al año', 'Extracciones', 'Rayos X dentales', 'Tratamientos básicos', 'Exámenes orales', 'Descuentos en procedimientos']
                : ['2 cleanings per year', 'Extractions', 'Dental X-rays', 'Basic treatments', 'Oral exams', 'Procedure discounts']
        },
        {
            id: 'vision',
            icon: <Eye className="w-5 h-5" />,
            title: language === 'es' ? 'Cobertura de Visión' : 'Vision Coverage',
            shortDesc: language === 'es' ? 'Exámenes y descuentos en lentes' : 'Exams and eyewear discounts',
            image: '/assets/images/female-optometrist-adjusting-phoropter.webp',
            description: language === 'es'
                ? 'Exámenes de la vista anuales y descuentos significativos en lentes y monturas. Cuida tu visión.'
                : 'Annual eye exams and significant discounts on lenses and frames. Take care of your vision.',
            bullets: language === 'es'
                ? ['Examen anual', 'Descuento en lentes', 'Descuento en monturas', 'Lentes de contacto', 'Detección temprana', 'Red de ópticas']
                : ['Annual exam', 'Lens discounts', 'Frame discounts', 'Contact lenses', 'Early detection', 'Optical network']
        }
    ];

    const selectedService = services[selectedServiceIndex];

    useEffect(() => {
        window.scrollTo(0, 0);

        // Load GoHighLevel form embed script
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://link.msgsndr.com/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);
            scriptLoaded.current = true;
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/images/Estrella_group.webp"
                            alt=""
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Color Overlay - semi-transparent gradient */}
                    <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary-dark/85 via-primary-base/80 to-primary-light/75" />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-accent-light font-medium text-xs sm:text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-sm">
                                <Star size={14} className="sm:w-4 sm:h-4" />
                                <span>{language === 'es' ? 'Programa de Afiliados' : 'Affiliate Program'}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
                                {language === 'es' ? 'Conviértete en' : 'Become an'} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                    {language === 'es' ? 'Afiliado Estrella' : 'Estrella Affiliate'}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                {language === 'es'
                                    ? 'Únete a nuestra red de afiliados y comienza a generar ingresos vendiendo el mejor plan médico del Sur de la Florida.'
                                    : 'Join our affiliate network and start generating income selling the best medical plan in South Florida.'}
                            </p>

                            <a
                                href="#affiliate-form"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-light via-accent-base to-accent-dark text-primary-dark font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mb-8"
                            >
                                {language === 'es' ? 'Ser Afiliado Ahora' : 'Become an Affiliate'}
                                <Award className="w-5 h-5" />
                            </a>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium drop-shadow-sm">{language === 'es' ? 'Sin costo de inscripción' : 'No enrollment fee'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium drop-shadow-sm">{language === 'es' ? 'Capacitación incluida' : 'Training included'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium drop-shadow-sm">{language === 'es' ? 'Materiales de marketing' : 'Marketing materials'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Combined Benefits & How It Works Section */}
                <section id="benefits" className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left: Why Join */}
                            <div>
                                <p className="text-primary-base font-semibold text-sm uppercase tracking-wider mb-3">
                                    {language === 'es' ? 'Beneficios' : 'Benefits'}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                    {language === 'es' ? '¿Por qué ser Afiliado?' : 'Why Become an Affiliate?'}
                                </h2>
                                <div className="space-y-5">
                                    {[
                                        { icon: <DollarSign className="w-5 h-5" />, title: language === 'es' ? 'Comisiones Competitivas' : 'Competitive Commissions', desc: language === 'es' ? 'Gana por cada cliente que refieras.' : 'Earn for every client you refer.' },
                                        { icon: <Zap className="w-5 h-5" />, title: language === 'es' ? 'Pagos Puntuales' : 'Timely Payments', desc: language === 'es' ? 'Recibe tus comisiones sin retrasos.' : 'Receive your commissions without delays.' },
                                        { icon: <Users className="w-5 h-5" />, title: language === 'es' ? 'Soporte y Materiales' : 'Support & Materials', desc: language === 'es' ? 'Todo lo que necesitas para vender.' : 'Everything you need to sell.' },
                                        { icon: <TrendingUp className="w-5 h-5" />, title: language === 'es' ? 'Ingresos Recurrentes' : 'Recurring Income', desc: language === 'es' ? 'Genera ingresos mes a mes.' : 'Generate income month after month.' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary-base/10 text-primary-base flex items-center justify-center flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: How It Works */}
                            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                                <p className="text-primary-base font-semibold text-sm uppercase tracking-wider mb-3">
                                    {language === 'es' ? 'Proceso' : 'Process'}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                    {language === 'es' ? 'Cómo Funciona' : 'How It Works'}
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { num: '1', title: language === 'es' ? 'Completa el Formulario' : 'Complete the Form', desc: language === 'es' ? 'Llena tus datos básicos.' : 'Fill in your basic info.' },
                                        { num: '2', title: language === 'es' ? 'Recibe tu Kit' : 'Get Your Kit', desc: language === 'es' ? 'Te enviamos todo para empezar.' : 'We send you everything to start.' },
                                        { num: '3', title: language === 'es' ? 'Comienza a Ganar' : 'Start Earning', desc: language === 'es' ? 'Refiere y genera comisiones.' : 'Refer and earn commissions.' },
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary-base text-white font-bold flex items-center justify-center flex-shrink-0">
                                                {step.num}
                                            </div>
                                            <div className="pt-1">
                                                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                                                <p className="text-gray-500 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="#affiliate-form"
                                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-b from-accent-light via-accent-base to-orange-500 text-primary-dark font-bold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    {language === 'es' ? 'Comenzar Ahora' : 'Get Started'}
                                    <Award className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Service Selector Section */}
                <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <img src="/assets/images/star-accent.webp" alt="" className="absolute top-20 right-8 w-40 opacity-[0.06] pointer-events-none hidden lg:block" />
                    <img src="/assets/images/star-accent.webp" alt="" className="absolute bottom-16 left-12 w-32 opacity-[0.04] pointer-events-none rotate-12 hidden lg:block" />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-base/10 text-primary-dark font-semibold text-sm mb-6 border border-primary-base/20">
                                <Stethoscope size={16} />
                                <span>{language === 'es' ? 'El Plan Médico' : 'The Medical Plan'}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                {language === 'es' ? 'Lo Que Vas a Vender' : 'What You Will Be Selling'}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                {language === 'es'
                                    ? 'Un plan de salud completo diseñado para las familias del Sur de la Florida.'
                                    : 'A comprehensive health plan designed for South Florida families.'}
                            </p>
                        </div>

                        {/* Interactive Two-Column Layout */}
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="grid lg:grid-cols-12">
                                    {/* Left - Services List */}
                                    <div className="lg:col-span-5 bg-gray-50 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary-base" />
                                            {language === 'es' ? 'Servicios Incluidos' : 'Included Services'}
                                        </h3>
                                        <div className="space-y-2 lg:space-y-3">
                                            {services.map((service, index) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => setSelectedServiceIndex(index)}
                                                    className={`w-full flex items-start gap-3 p-3 lg:p-4 rounded-xl text-left transition-all duration-200 ${
                                                        selectedServiceIndex === index
                                                            ? 'bg-primary-base text-white shadow-lg shadow-primary-base/20'
                                                            : 'bg-white hover:bg-gray-100 border border-gray-100'
                                                    }`}
                                                >
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                        selectedServiceIndex === index
                                                            ? 'bg-white/20'
                                                            : 'bg-primary-base/10'
                                                    }`}>
                                                        <span className={selectedServiceIndex === index ? 'text-white' : 'text-primary-base'}>
                                                            {service.icon}
                                                        </span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className={`font-semibold text-sm lg:text-base ${
                                                            selectedServiceIndex === index ? 'text-white' : 'text-gray-900'
                                                        }`}>
                                                            {service.title}
                                                        </p>
                                                        <p className={`text-xs lg:text-sm truncate ${
                                                            selectedServiceIndex === index ? 'text-white/80' : 'text-gray-500'
                                                        }`}>
                                                            {service.shortDesc}
                                                        </p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right - Selected Service Details */}
                                    <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8">
                                        {/* Service Image */}
                                        <div className="relative rounded-xl lg:rounded-2xl overflow-hidden mb-6 h-56 sm:h-72 lg:h-80">
                                            <img
                                                src={selectedService.image}
                                                alt={selectedService.title}
                                                className="w-full h-full object-cover transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                                        </div>

                                        {/* Service Info */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary-base/10 flex items-center justify-center text-primary-base">
                                                {selectedService.icon}
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                                                {selectedService.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
                                            {selectedService.description}
                                        </p>

                                        {/* Bullet Points - 2 columns */}
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                                            {selectedService.bullets.map((bullet, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary-base flex-shrink-0" />
                                                    <span className="text-gray-700 text-xs lg:text-sm">{bullet}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Price Card - Below the selector */}
                            <div className="mt-8 lg:mt-12">
                                <div className="bg-gradient-to-br from-primary-dark via-primary-base to-primary-dark rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent-base rounded-full filter blur-3xl opacity-25" />
                                    <img src="/assets/images/star-accent.webp" alt="" className="absolute top-4 right-4 w-20 opacity-15 hidden sm:block" />

                                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                        {/* Left: Price */}
                                        <div className="text-center lg:text-left">
                                            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
                                                {language === 'es' ? 'Todo esto por solo' : 'All this for only'}
                                            </p>
                                            <div className="flex items-end justify-center lg:justify-start gap-2">
                                                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">$59</span>
                                                <span className="text-white/70 text-xl sm:text-2xl pb-1 lg:pb-2">/{language === 'es' ? 'mes' : 'mo'}</span>
                                            </div>
                                            <p className="text-accent-light font-semibold mt-1">{language === 'es' ? 'Por persona' : 'Per person'}</p>
                                        </div>

                                        {/* Center: Benefits */}
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 lg:gap-y-3">
                                            {[
                                                language === 'es' ? 'Sin contratos' : 'No contracts',
                                                language === 'es' ? 'Sin copagos' : 'No copays',
                                                language === 'es' ? 'Sin deducibles' : 'No deductibles',
                                                language === 'es' ? 'Cobertura inmediata' : 'Immediate coverage',
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-light flex-shrink-0" />
                                                    <span className="text-white/90 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right: CTA */}
                                        <div className="text-center lg:text-right">
                                            <a
                                                href="#affiliate-form"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-light via-accent-base to-accent-dark text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                                            >
                                                {language === 'es' ? '¡Fácil de Vender!' : 'Easy to Sell!'}
                                                <Award className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Section */}
                <Locations />

                {/* Form Section - GoHighLevel Embed */}
                <section id="affiliate-form" className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/5 opacity-50 transform -skew-x-12" />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-20 left-6 w-44 opacity-[0.07] pointer-events-none hidden lg:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-16 right-12 w-52 opacity-[0.05] pointer-events-none -rotate-12 hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-base/10 text-accent-dark font-semibold text-sm mb-4 border border-accent-base/20">
                                    <Award size={16} />
                                    <span>{language === 'es' ? 'Registro de Afiliados' : 'Affiliate Registration'}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {language === 'es' ? 'Completa tu Solicitud' : 'Complete Your Application'}
                                </h2>
                                <p className="text-gray-600 max-w-xl mx-auto">
                                    {language === 'es'
                                        ? 'Llena el formulario a continuación y nuestro equipo te contactará para iniciar el proceso de afiliación.'
                                        : 'Fill out the form below and our team will contact you to start the affiliation process.'}
                                </p>
                            </div>

                            {/* GoHighLevel Form Embed Container */}
                            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="p-4 md:p-8">
                                    {/* GoHighLevel Form - Preserving original styling */}
                                    <iframe
                                        src="https://api.leadconnectorhq.com/widget/form/1J17icYb7R4rb6vThibh"
                                        style={{
                                            width: '100%',
                                            height: '762px',
                                            border: 'none',
                                            borderRadius: '3px'
                                        }}
                                        id="inline-1J17icYb7R4rb6vThibh"
                                        data-layout="{'id':'INLINE'}"
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Affiliate Program OnBoarding"
                                        data-height="762"
                                        data-layout-iframe-id="inline-1J17icYb7R4rb6vThibh"
                                        data-form-id="1J17icYb7R4rb6vThibh"
                                        title="Affiliate Program OnBoarding"
                                    />
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span>{language === 'es' ? 'Información segura' : 'Secure information'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span>{language === 'es' ? 'Sin compromiso' : 'No obligation'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-green-500" />
                                    <span>{language === 'es' ? 'Respuesta rápida' : 'Fast response'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
