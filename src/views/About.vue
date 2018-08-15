<template lang="pug">
  section.mark.text-center.animate_intro
    h1 Informações
    p Esse web aplicativo é uma ação social e auxiliará você a criar um curriculo profissional, elegante e objetivo, de uma forma totalmente gratuita!
    p Espera-se que esse aplicativo, ajude você de todas as maneiras portáteis possíveis para geração de seu novo curriculo profissional.
    p Criado por um rapaz simples que mesmo com as dificuldades do seu cotidiano, focou e dedicou seus estudos para elaborar esse projeto.
    p Se você deseja ajudar de alguma forma existe esse
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  repositório no github
      | ou no
      a(href='https://github.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  repositório no gitlab
      | Ou ententre em contato lucaslimay@gmail.com
    br
    p Atenciosamente, Lucas Lima.
</template>

<script>
  export default {
    name: 'about',
    head: {
      title: {
        inner: 'Sobre'
      }
    }
  }
</script>
