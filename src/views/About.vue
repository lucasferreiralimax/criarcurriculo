<template lang="pug">
  section.animate_intro
    h1 Informações
    p Esse web aplicativo é uma ação social e auxiliará você a criar um curriculo profissional, elegante e objetivo, de uma forma totalmente gratuita!
    p Esse web aplicativo é totalmente gratuito, sendo assim você não tem nenhuma obrigação financeira com ele.
    p Espera-se que esse aplicativo, ajude você de todas as maneiras portáteis possíveis para geração de seu novo curriculo profissional.
    p Criado por um rapaz que mesmo em meio a todas as adversidades do seu cotidiano, focou e dedicou seus estudos para elaborar esse web aplicativo.
    p Se você deseja ajudar com esse projeto de alguma forma ou comentário, deixe sua contribuição em nosso
      a(href='https://gitlab.com/lucaslimax/curriculogratis' target='_blank' rel="noopener")  repositório no @gitlab
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
