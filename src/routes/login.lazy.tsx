import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm, SubmitHandler } from "react-hook-form"
import { reqresApi, useLoginMutation } from "@/services/reqresApi";
import { useEffect } from "react";

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

type Inputs = {
  email: string, 
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const navigate = useNavigate()
  const [loginUser] = useLoginMutation({ fixedCacheKey: 'login' })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre na sua conta</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" className="space-y-6" onSubmit={handleSubmit((data) => {
            loginUser(data)
          })}>
           <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                E-mail
              </label>
              <div className="mt-1">
                <Input autoComplete="email" id="email" placeholder="Seu e-mail" required type="email" {...register("email", { required: true })}/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Senha
              </label>
              <div className="mt-1">
                <Input
                  autoComplete="current-password"
                  id="password"
                  placeholder="Sua senha"
                  required
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div>
              <Button className="w-full" type="submit">
                Entrar na sua conta
              </Button>
              <p className="text-center">ou</p>
              <Button className="w-full" onClick={()=>navigate({
                  to: '/register'
                })}>
                Crie uma conta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
