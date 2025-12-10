import { Shield, Heart, Hammer, Map, Ban, Swords, Users, MessageCircle, HelpCircle, Crown } from "lucide-react";

const rules = [
  {
    icon: Heart,
    title: "Sempre utilize o respeito",
    description: "Nada de xingamentos, brigas ou ofensas nas suas conversas.",
  },
  {
    icon: Ban,
    title: "Sem roubo",
    description: "Não pegue itens, recursos, etc de outros jogadores sem permissão do mesmo.",
  },
  {
    icon: Hammer,
    title: "Sem grief",
    description: "Não destrua construções de outros jogadores e evite trollagens pesadas.",
  },
  {
    icon: Map,
    title: "Proteja suas áreas",
    description: "Use claims e respeite as áreas dos outros jogadores.",
  },
  {
    icon: Shield,
    title: "Sem hacks",
    description: "Proibido o uso de cheats, x-ray, macros, auto-click ou qualquer vantagem injusta.",
  },
  {
    icon: Swords,
    title: "PvP consentido",
    description: "Apenas lute com outro jogador caso ambos concordarem.",
  },
  {
    icon: Users,
    title: "Ambiente amigável",
    description: "Evite discussões pesadas, sobre política, brigas e qualquer outro assunto polêmico.",
  },
  {
    icon: MessageCircle,
    title: "Sem spam",
    description: "Não envie mensagens repetitivas ou várias mensagens sem sentido.",
  },
  {
    icon: HelpCircle,
    title: "Ajude quem for novo",
    description: "O servidor é uma família — sempre que puder, dê uma força para quem está começando.",
  },
  {
    icon: Crown,
    title: "Admins têm a palavra final",
    description: "Se a staff pedir algo, siga. Em caso de dúvidas ou abuso, chame um administrador.",
  },
];

const Rules = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-foreground glow-text mb-4">
            REGRAS DO SERVIDOR
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Para manter a harmonia e diversão de todos, siga as regras abaixo
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="gradient-border rounded-xl p-6 bg-card hover:scale-[1.02] transition-transform duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/10 text-cyan shrink-0">
                  <rule.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Atenciosamente, equipe staff do Covarium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
