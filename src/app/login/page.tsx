import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-xl flex-col justify-center p-8">
        <Image
          className="mb-6"
          src="/financeLogo.svg"
          alt="Login Image"
          width={173}
          height={39}
        />
        <h1 className="mb-3 text-4xl font-bold text-white">Bem-vindo!</h1>
        <p className="text-muted-foreground font-light">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline" className="mt-6">
          <Image
            src="/google.svg"
            alt="Google Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Entrar com Google
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/hero.png"
          alt="Login Image"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default LoginPage;
