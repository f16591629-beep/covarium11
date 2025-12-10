import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import covariumLogo from "@/assets/covarium-logo.png";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "survivalcovarium.qzz.io";
  const discordLink = "https://discord.gg/apsk5RA4";

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast({
        title: "IP Copiado!",
        description: "Cole no Minecraft e entre no servidor!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Tente novamente",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Logo */}
      <div className="animate-float mb-8">
        <img
          src={covariumLogo}
          alt="Covarium Logo"
          className="w-64 md:w-80 lg:w-96 minecraft-pixel drop-shadow-2xl rounded-3xl"
        />
      </div>

      {/* Title */}
      <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-foreground glow-text mb-4 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        COVARIUM
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        Um servidor survival onde a comunidade é família. Junte-se a nós e construa sua história!
      </p>

      {/* IP Copy Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="gradient-border rounded-lg px-6 py-3 bg-card">
          <code className="font-mono text-lg md:text-xl text-cyan font-bold">
            {serverIP}
          </code>
        </div>
        <Button
          variant="copy"
          size="lg"
          onClick={copyIP}
          className="min-w-[140px]"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copiar IP
            </>
          )}
        </Button>
      </div>

      {/* Discord Button */}
      <a
        href={discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <Button variant="discord" size="xl">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          Entrar no Discord
        </Button>
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
