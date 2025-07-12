import { Shield, Truck, Wrench, Phone, Award, Users } from "lucide-react";
function Features() {
    const features = [
        {
            icon: Shield,
            title: "Garantía Extendida",
            description: "Todos nuestros productos incluyen garantía de hasta 5 años en partes y mano de obra."
        },
        {
            icon: Truck,
            title: "Envío e Instalación",
            description: "Servicio completo de entrega e instalación profesional en todo el país."
        },
        {
            icon: Wrench,
            title: "Mantenimiento",
            description: "Servicio técnico especializado y mantenimiento preventivo programado."
        },
        {
            icon: Phone,
            title: "Soporte 24/7",
            description: "Atención al cliente las 24 horas para resolver cualquier consulta o emergencia."
        },
        {
            icon: Award,
            title: "Calidad Certificada",
            description: "Equipos certificados internacionalmente con los más altos estándares de calidad."
        },
        {
            icon: Users,
            title: "Asesoría Experta",
            description: "Equipo de especialistas para ayudarte a elegir el equipamiento ideal."
        }
    ];


    return (
        <section id="sobre" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        ¿Por Qué Elegirnos?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Somos líderes en el mercado de equipamiento deportivo con más de 15 años de experiencia.
                        Nuestro compromiso es brindar la mejor calidad y servicio.
                    </p>
                </div>
                <div className="contenedor">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-custom bg-[#1f1f1f] border border-gray-700 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;