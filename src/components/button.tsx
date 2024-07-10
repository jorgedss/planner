import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

// tailwind-variants: biblioteca para criar variações de estilos para componentes

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center',
  // propriedades em comum dos buttons

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },

  defaultVariants: {
    variant: 'primary', // caso nenhuma variante seja passada
    size: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  // extends ComponentProps<'button'>: a interface herda todos os atributos do button.
  // Assim, não é necessário declarar aqui toda vez que usarmos um evento no botão.
  // (ex: funcao: ()=> void)
  // Para podermos passar a variant diretamente no componente Button (<Button></Button>),
  // precisamos passar a variante para inteface ButtonProps. Mas, para automatizar isso, usamos
  // VariantProps<typeof buttonVariants> na interface. Com isso, ela entende e tipa
  // automaticmanete as variants

  children: ReactNode // para passar conteúdo dentro do componente
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
