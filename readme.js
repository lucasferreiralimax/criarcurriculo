const fs = require("fs");

const urlHosting = "https://criar-curriculo.web.app";
import { list_languages } from "./src/i18n/list_languages.js";

let readme = `# :page_with_curl: Criar Currículo
> Essa aplicativo web tem o objetivo de ajudar a todos aqueles que precisa criar um currículo, rápido, fácil e grátis.
> Facilitando a forma que você cria seu currículo com uma usabilidade desenhada para ser simples.
>
> A aplicação foi desenvolvida com diversos componentes interativos com transicões e animações, rica em usabilidade.
> Com uma interface totalmente adaptável e reativa ao tamanho da tela do dispositivo usado.
> :computer::iphone::tv::watch::video_game:
---
![Currículo Grátis](https://lucasferreiralimax-dev.web.app/assets/projects/boasorte.jpg)
---
## :cloud: Link's
> Yo, ho, yo, ho :checkered_flag:
`;

for (let language in list_languages) {
  let name = `${list_languages[language][2]} - ${list_languages[language][0]}`;
  let asset = `./src/assets/flags/${list_languages[language][1]}.svg`;
  let url = `${urlHosting}/?lang=${list_languages[language][1]}`;

  readme += `#### <a href="${url}" target="_blank"><img alt="${name}" width="20px" src="${asset}" /></a> [${name}](${url})\n`;
}

readme += `\n___
# :love_letter: Ajude também
> Se encontrar algum erro ou quiser contribuir com uma ideia para o projeto crie uma [issue](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), sua ajuda será muito bem-vinda desde já agradeço. :clap:
>
> Escrito para diversos idiomas, ajude a melhorar nossas traduções :earth_americas::earth_africa::earth_asia:
---
#### Create Curriculum
> This web application aims to help all those who need to create a curriculum, fast, easy and free.
> Facilitating the way you create your resume with a usability designed to be simple.
>
> The application was developed with several interactive components with transitions and animations, rich in usability.
> With an interface fully adaptable and reactive to the screen size of the device used.
#### Help also
> If you find a mistake or want to contribute an idea to the project, create a [issue](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), Your help will be greatly appreciated.
>
> Written for different languages, help improve our translations
---
#### Crear Resume
> Esta aplicación web tiene el objetivo de ayudar a todos aquellos que necesitan crear un currículum, rápido, fácil y gratis.
> Facilitando la forma en que crea su currículum con una usabilidad diseñada para ser simple.
>
> La aplicación fue desarrollada con diversos componentes interactivos con transiciones y animaciones, rica en usabilidad.
> Con una interfaz totalmente adaptable y reactiva al tamaño de la pantalla del dispositivo utilizado.
#### Ayuda también
> Si encuentras algún error o quieres contribuir con una idea para el proyecto, crea un [issue](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), tu ayuda será muy bienvenido desde ya gracias.
>
> Escrito para varios idiomas, ayude a mejorar nuestras traducciones
---
#### Создайте Свободное
> Это веб-приложение призвано помочь всем тем, кто нуждается в создании учебного плана, быстро, легко и бесплатно.
> Содействие тому, как вы создаете свое резюме, с удобством использования, которое должно быть простым.
>
> Приложение разработано с несколькими интерактивными компонентами с переходами и анимациями, богатыми удобством использования.
> С интерфейсом, полностью адаптируемым и реагирующим на размер экрана используемого устройства.
#### Помощь также
> Если вы обнаружили ошибку или хотите внести свой вклад в проект, создайте [вопрос](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), с вашей помощью ваша помощь будет очень рада.
>
> Написано для разных языков, помогите улучшить наши переводы
---
#### Créer Curriculum
> Cette application Web vise à aider tous ceux qui ont besoin de créer un curriculum, rapide, facile et gratuit.
> Faciliter la façon dont vous créez votre CV avec une facilité d'utilisation conçue pour être simple.
>
> L'application a été développée avec plusieurs composants interactifs avec des transitions et des animations riches en fonctionnalités.
> Avec une interface totalement adaptable et réactive à la taille de l'écran de l'appareil utilisé.
#### Aide aussi
> Si vous trouvez une erreur ou souhaitez apporter une idée au projet, créez un [issue](https://github.com/lucasferreiralimax/criarcurriculo/issues/new). Votre aide sera grandement appréciée.
>
> Rédigé pour différentes langues, aidez à améliorer nos traductions
---
#### Müfredat ücretsiz
> Bu web uygulaması, hızlı, kolay ve ücretsiz bir müfredat oluşturmak için ihtiyaç duyan herkese yardımcı olmayı amaçlamaktadır.
> Özgeçmişinizi yaratma şeklinizi kolaylaştırmak için tasarlanan bir kullanılabilirlik ile.
>
> Uygulama geçişler ve animasyonlar, kullanılabilirlik açısından zengin çeşitli etkileşimli bileşenleri ile geliştirilmiştir.
> Kullanılan cihazın ekran boyutuna tamamen uyarlanabilir ve tepki veren bir arabirim.
#### Ayrıca yardım
> Bir hata bulursanız veya projeye bir fikir katmak istiyorsanız, bir  oluşturun [sorun](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), Yardımınız büyük ölçüde takdir edilecektir.
>
> Farklı diller için yazılmış, çevirilerimizi geliştirmeye yardımcı olun
---
#### Cwricwlwm Am Ddim
> Nod y cais hwn yw helpu pawb sydd angen creu cwricwlwm, yn gyflym, yn hawdd ac yn rhad ac am ddim.
> Hwyluso'r ffordd y byddwch yn creu eich ailddechrau gyda defnyddioldeb wedi'i gynllunio i fod yn syml.
>
> Datblygwyd y cais gyda nifer o gydrannau rhyngweithiol gyda thrawsnewidiadau ac animeiddiadau, sy'n gyfoethog o ran defnyddioldeb.
> Gyda rhyngwyneb yn gwbl addasadwy ac yn adweithiol i faint sgrin y ddyfais a ddefnyddir.
#### help hefyd
> Os byddwch chi'n dod o hyd i wall neu eisiau cyfrannu syniad i'r prosiect, crëwch [broblem](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), mae croeso mawr i'ch help.
>Wedi'i ysgrifennu mewn sawl iaith, yn helpu i wella ein cyfieithiadau.
---
#### カリキュラム 無料
>このウェブアプリケーションは、カリキュラムを作成する必要があるすべての人を迅速かつ簡単に無料で利用できるようにすることを目的としています。
>シンプルに設計された使いやすさで履歴書を作成する方法を容易にします。
>
>このアプリケーションは、トランジションとアニメーションを備えた複数のインタラクティブなコンポーネントで開発されています。
>使用するデバイスの画面サイズに完全に適応し、反応するインターフェース。
#### ヘルプ
>エラーが見つかった場合や、プロジェクトのアイデアを投稿したい場合は、[問題](https://github.com/lucasferreiralimax/criarcurriculo/issues/new), を作成してください。 ：拍手：
>
>さまざまな言語のために書かれた、翻訳の改善に役立ちます
---
#### 课程免费
>此Web应用程序旨在帮助所有需要创建课程的人，快速，轻松和免费。
>通过简单易用的方式促进您创建简历的方式。
>
>该应用程序是使用具有过渡和动画的多个交互式组件开发的，具有丰富的可用性。
>界面完全适应和反应所用设备的屏幕尺寸。
#### 帮助也
>如果您发现错误或想要为项目提供想法，请创建 [问题](https://github.com/lucasferreiralimax/criarcurriculo/issues/new)，我们将非常感谢您的帮助。
>
>针对不同语言编写，有助于改进我们的翻译
---
## :headphones: Iniciando
> Após clonar o projeto em sua máquina ira precisar ter instalado o [Node.js](https://nodejs.org) em sua máquina.
> Abra o terminal ou cmd e execute os seguintes comandos para instalar e iniciar o projeto.
#### Starting
> After cloning the project on your machine you will need to have the [Node.js](https://nodejs.org) on your machine.
> Open the terminal or cmd and run the following commands to install and start the project.
#### Comienzo
> Después de clonar el proyecto en su máquina necesitará instalar el [Node.js](https://nodejs.org) en su máquina.
> Abra el terminal o cmd y ejecute los siguientes comandos para instalar e iniciar el proyecto.
#### начало
> После клонирования проекта на вашем компьютере вам понадобится [Node.js](https://nodejs.org), установленный на вашем компьютере.
> Откройте терминал или cmd и запустите следующие команды для установки и запуска проекта.
#### À partir de
> Après avoir cloné le projet sur votre machine, vous devrez avoir le [Node.js](https://nodejs.org) sur votre machine.
> Ouvrez le terminal ou cmd et exécutez les commandes suivantes pour installer et démarrer le projet.
#### Başlangıç
> Projeyi makinenizde klonladıktan sonra makinenizde [Node.js](https://nodejs.org) olması gerekir.
> Terminali veya cmd'yi açın ve projeyi kurmak ve başlatmak için aşağıdaki komutları çalıştırın.
#### スタート
>あなたのマシン上でプロジェクトをクローンした後、あなたのマシンに [Node.js](https://nodejs.org),をインストールする必要があります。
>ターミナルまたはcmdを開き、次のコマンドを実行してプロジェクトをインストールおよび開始します。
#### 开始
>在计算机上克隆项目后，您需要在计算机上安装 [Node.js](https://nodejs.org)。
>打开终端或cmd并运行以下命令以安装和启动项目。

---
\`\`\` bash
# install dependencies
npm install
yarn install

# serve compiles and hot-reloads for development localhost:8080
npm run serve
yarn serve

# compiles and minifies for production
npm run build
yarn build

# run our unit tests
npm run test:unit
yarn test:unit

# run our end-to-end tests
npm run test:e2e
yarn test:e2e

# lints and fixes files
npm run lint
yarn lint

\`\`\`
---

### :performing_arts: Com quem você pode conversar sobre o projeto?
#### Who can you talk to about the project?
#### ¿Con quién puedes hablar sobre el proyecto?
#### С кем вы можете поговорить о проекте?
#### À qui pouvez-vous parler du projet?
#### Projeyle ilgili kim konuşabilirsin?
#### Gyda phwy allwch chi siarad am y prosiect?
#### 誰がプロジェクトについて話すことができますか？
#### 你能谈谈这个项目吗？

* :ghost: @lucasferreiralimax
* :email: lucasferreiralimax@gmail.com`;

fs.writeFileSync("README.md", readme);
