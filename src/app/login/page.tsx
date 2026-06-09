import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-md flex-col">
          <Image
            className="mb-6"
            src="/financeLogo.svg"
            alt="Login Image"
            width={160}
            height={80}
          />
          <h1 className="mb-3 text-2xl font-bold text-white">Bem-vindo!</h1>
          <p className="max-w-sm leading-relaxed font-light text-white">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
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
