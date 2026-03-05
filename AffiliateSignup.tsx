import { ShieldCheck, CheckCircle2, TrendingUp, DollarSign, Users, Zap, Award, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export function AffiliateSignup() {
    const { t, language } = useLanguage();
    const scriptLoaded = useRef(false);

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

    const benefits = [
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: language === 'es' ? 'Comisiones Atractivas' : 'Attractive Commissions',
            desc: language === 'es'
                ? 'Gana comisiones competitivas por cada cliente que refieras a nuestro plan médico.'
                : 'Earn competitive commissions for every client you refer to our medical plan.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: language === 'es' ? 'Pagos Rápidos' : 'Fast Payments',
            desc: language === 'es'
                ? 'Recibe tus comisiones de manera puntual y sin complicaciones.'
                : 'Receive your commissions on time and hassle-free.'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: language === 'es' ? 'Soporte Dedicado' : 'Dedicated Support',
            desc: language === 'es'
                ? 'Accede a materiales de marketing y soporte personalizado para maximizar tus ventas.'
                : 'Access marketing materials and personalized support to maximize your sales.'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: language === 'es' ? 'Ingresos Recurrentes' : 'Recurring Income',
            desc: language === 'es'
                ? 'Genera ingresos pasivos mes a mes mientras tus referidos permanezcan activos.'
                : 'Generate passive income month after month while your referrals remain active.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: language === 'es' ? 'Completa el Formulario' : 'Complete the Form',
            desc: language === 'es'
                ? 'Llena tus datos y cuéntanos sobre tu experiencia.'
                : 'Fill in your details and tell us about your experience.'
        },
        {
            number: '2',
            title: language === 'es' ? 'Recibe tu Kit de Afiliado' : 'Receive Your Affiliate Kit',
            desc: language === 'es'
                ? 'Te enviaremos todo lo que necesitas para comenzar a vender.'
                : "We'll send you everything you need to start selling."
        },
        {
            number: '3',
            title: language === 'es' ? 'Comienza a Ganar' : 'Start Earning',
            desc: language === 'es'
                ? 'Refiere clientes y comienza a generar comisiones inmediatamente.'
                : 'Refer clients and start generating commissions immediately.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-primary-dark via-primary-base to-primary-light">
                    <div className="absolute inset-0 z-0">
                        {/* Decorative star accents */}
                        <img
                            src="/assets/images/star-accent.webp"
                            alt=""
                            className="absolute top-10 left-5 w-40 md:w-72 opacity-15 pointer-events-none animate-float hidden sm:block"
                        />
                        <img
                            src="/assets/images/star-accent.webp"
                            alt=""
                            className="absolute bottom-5 right-10 w-32 md:w-56 opacity-10 pointer-events-none rotate-12 animate-float delay-500 hidden sm:block"
                        />
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-base rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-light font-medium text-xs sm:text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-sm animate-fade-in-down">
                                <Star size={14} className="sm:w-4 sm:h-4" />
                                <span>{language === 'es' ? 'Programa de Afiliados' : 'Affiliate Program'}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 animate-fade-in-up">
                                {language === 'es' ? 'Conviértete en' : 'Become an'} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                    {language === 'es' ? 'Afiliado Estrella' : 'Estrella Affiliate'}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                                {language === 'es'
                                    ? 'Únete a nuestra red de afiliados y comienza a generar ingresos vendiendo el mejor plan médico del Sur de la Florida.'
                                    : 'Join our affiliate network and start generating income selling the best medical plan in South Florida.'}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
                                <div className="flex items-center gap-2 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium">{language === 'es' ? 'Sin costo de inscripción' : 'No enrollment fee'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium">{language === 'es' ? 'Capacitación incluida' : 'Training included'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                    <span className="text-sm font-medium">{language === 'es' ? 'Materiales de marketing' : 'Marketing materials'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-16 right-8 w-48 opacity-[0.06] pointer-events-none hidden md:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {language === 'es' ? '¿Por qué ser Afiliado Estrella?' : 'Why Become an Estrella Affiliate?'}
                            </h2>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                    <div className="w-12 h-12 rounded-xl bg-primary-base/10 text-primary-base flex items-center justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {language === 'es' ? 'Cómo Funciona' : 'How It Works'}
                            </h2>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {steps.map((step, idx) => (
                                <div key={idx} className="text-center relative">
                                    {idx < 2 && (
                                        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-base/20" />
                                    )}
                                    <div className="w-16 h-16 rounded-full bg-primary-base text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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

                {/* CTA Section */}
                <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-dark via-primary-base to-primary-light relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-10 right-10 w-64 opacity-15 pointer-events-none hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {language === 'es' ? '¿Listo para Comenzar?' : 'Ready to Get Started?'}
                            </h2>
                            <p className="text-lg text-white/80 mb-8">
                                {language === 'es'
                                    ? 'Únete a cientos de afiliados que ya están generando ingresos con Estrella Medical Centers.'
                                    : 'Join hundreds of affiliates who are already generating income with Estrella Medical Centers.'}
                            </p>
                            <a
                                href="#affiliate-form"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-base text-primary-dark font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {language === 'es' ? 'Registrarme Ahora' : 'Register Now'}
                                <Award className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
