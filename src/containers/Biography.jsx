import React from 'react';

const Biography = () => {
  return (
    <div className="main-biography">
      <section className="my-info">
        <h1>Who is Sebastian Rivera?</h1>
        <p>
          Sebastian Rivera Ocampo. Amante de los gatos y de la tecnología por
          naturaleza, es un desarrollador Frontend y entusiasta del UI:UX nacido en
          colombia en los primeros años de los 2000. Desde pequeño siempre estuvo
          interesado en los juegos y en la tecnologia.
        </p>
        <p>
          A sus 11 años hizo su primer ataque de ingenieria social. cuando con una
          publicación supo la primera letra de la contraseña de una de sus
          compañeras de clase donde instantaneamente le vino a su cabeza la
          combinación perfecta para esta misma.
        </p>
        <p>
          A esta misma edad, un compañero le enseñó un pagina donde podría conseguir
          muchos recursos de un juego (Dragon city) y aprendió a usarla con gran
          facilidad. Aqui fué donde su interes por saber como podría hacerlo con más
          aplicaciones y otros juegos nació.
        </p>
        <p>
          A sus 13 años, despues de saber que los juegos se creaban a partir de la
          programación, descubrió como se creaban las páginas web y con una
          aplicación gratuita en la play store aprendió su primer lenguaje no de
          programación, pero es el que le da la estructura a la informacion de las
          páginas web: HTML.
        </p>
        <p>
          De alli hasta sus 15 años, andaba con un cuaderno a todas partes donde
          tenía todas las etiquetas de este lenguaje ademas de otros principios de
          algunos lenguajes de programación como PHP y JavaScript.
        </p>
        <p>
          A sus 16 años tenía por objetivo conseguir el plan anual de estudio de
          Platzi (Plataforma online para aprender programacion y todo lo relacionado
          con tecnología) cuando por medio de un correo le llega la promocion de
          reyes magos y con la ayuda de sus padres pudieron conseguir dicha
          membresía. Alli fué donde aprendió las tecnologias básicas de desarrollo
          web (HTML, CSS, JavaScript).
        </p>
        <p>
          A sus 17 años consiguió entrar a Platzi Master, un entrenamiento intensivo
          que potenciaría sus habilidades como desarrollador donde solo un pequeño
          porcentaje de estudiantes conseguían entrar.
        </p>
        <p>
          A sus 18 años conseguiría entrar a su primer empleo, donde en su
          entrevista aprendería un lenguaje nuevo en tan solo 3 dias (React Native)
          y crearia una aplicacion móvil. allí aprendió a trabajar en equipo y a
          trabajar en un ambiente de gran aprendizaje.
        </p>
        <p>
          Aun sigue su camino de aprendizaje y sabe que aun falta mucho que
          aprender.
        </p>
      </section>
      <section className="stack">
        <h1>My stack</h1>
        <p>Technologies that i use:</p>
        <ul className="stack-tech">
          <li>
            <img
              src="https://i.ibb.co/yYzh9hR/icons8-html-5-48.png"
              alt="html icon"
            />
            <p>HTML</p>
          </li>
          <li>
            <img src="https://i.ibb.co/ckvF6qj/icons8-css3-48.png" alt="css icon" />
            <p>CSS</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/TgVcPpV/icons8-sass-48.png"
              alt="sass icon"
            />
            <p>Sass</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/9pRJ0T7/icons8-javascript-48.png"
              alt="javascript icon"
            />
            <p>JavaScript</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/VVp89wN/icons8-react-40-1.png"
              alt="React icon"
            />
            <p>React</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/H7zxq2x/icons8-redux-144-1.png"
              alt="Redux icon"
            />
            <p>Redux</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/VVp89wN/icons8-react-40-1.png"
              alt="React native icon"
            />
            <p>React Native</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/CPMRS3j/icons8-vue-js-48-1.png"
              alt="Vue icon"
            />
            <p>Vue</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/JvNvfxT/icons8-webpack-64.png"
              alt="webpack icon"
            />
            <p>Webpack</p>
          </li>
          <li>
            <img src="https://i.ibb.co/PFGbYc1/icons8-git-48.png" alt="git icon" />
            <p>Git</p>
          </li>
          <li>
            <img
              src="https://i.ibb.co/r62hGp7/icons8-figma-48.png"
              alt="figma-icon"
            />
            <p>Figma</p>
          </li>
        </ul>
      </section>
      <section className="contact">
        <h1>Social Media</h1>
        <ul className="social-media">
          <li>
            <a target="_blank" rel='noreferrer noopener' href="https://twitter.com/srbostjan">
              <img
                src="https://i.ibb.co/pjsTXmj/twitter-gradient-blue-icon.png"
                alt="twitter icon"/>
            </a>
          </li>
          <li>
            <a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/bostjanrivera/">
              <img
                src="https://i.ibb.co/58vHNTL/linkedin-gradient-blue.png"
                alt="linkedin icon"/>
            </a>
          </li>
          <li>
            <a target="_blank" rel='noreferrer noopener' href="https://github.com/Bostjanrivera">
              <img
                src="https://i.ibb.co/ZK6nbs6/github-gradient-blue-icon.png"
                alt="Github icon"/>
            </a>
          </li>
        </ul>
      </section>
      <section className="made-love">
        <p>
          Made with
          <img src="https://i.ibb.co/WtH8k9y/red-heart.png" alt="Heart animated" />
        </p>
        <p><span>© </span> 2021 Sebastian Rivera</p>
      </section>
    </div>
  );
};

export default Biography;