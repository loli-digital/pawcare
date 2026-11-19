import "./LandingPage.scss";

function LandingPage() {
  return (
    <main>
      <section className="hero">
        <h1>La salud de tu mascota, siempre bajo control</h1>
        <p>
          PawCare centraliza historiales clínicos, curvas de peso biométricas,
          calendarios de vacunación, tratamientos farmacológicos y recordatorios
          inteligentes con la precisión de un software clínico y la sencillez
          que mereces
        </p>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <h2>Todo el cuidado de tu mascota, más sencillo</h2>
        <p>
          Sabemos que mantener al día toda la información de salud de tu mascota
          puede resultar complicado. PawCare te ayuda a tenerlo todo organizado
          para que puedas centrarte en lo que realmente importa: su bienestar.
        </p>
        <article>
          <h3>Toda su información en un mismo lugar</h3>
          <p>
            Olvídate de buscar entre documentos, notas y fotografías para
            encontrar información importante.
          </p>
        </article>
        <article>
          <h3>Más tranquilidad en su cuidado</h3>
          <p>
            Ten presentes las fechas importantes y evita pasar por alto sus
            cuidados programados.
          </p>
        </article>
        <article>
          <h3>Conoce mejor su evolución</h3>
          <p>
            Consulta su información de salud y lleva un seguimiento de su
            bienestar a lo largo del tiempo.
          </p>
        </article>
      </section>

      {/* Functionalities */}
      <section className="functionalities">
        <h2>Todo lo que necesitas para cuidar de su salud</h2>
        <p>
          Descubre las herramientas que te ayudarán a mantener organizada toda
          la información de tu mascota.
        </p>
        <article>
          <h3>Perfiles de mascotas</h3>
          <p>Crea y personaliza un perfil para cada una de tus mascotas.</p>
        </article>
        <article>
          <h3>Historial médico</h3>
          <p>Registra y consulta sus antecedentes y visitas veterinarias.</p>
        </article>
        <article>
          <h3>Vacunas y desparasitaciones</h3>
          <p>Registra las vacunas y los tratamientos antiparasitarios.</p>
        </article>
        <article>
          <h3>Medicamentos y tratamientos</h3>
          <p>Guarda información sobre medicación y tratamientos.</p>
        </article>
        <article>
          <h3>Citas veterinarias</h3>
          <p>Organiza y consulta las próximas visitas al veterinario.</p>
        </article>
        <article>
          <h3>Seguimiento de salud</h3>
          <p>Registra el peso y consulta su evolución.</p>
        </article>
        <article>
          <h3>Documentos médicos</h3>
          <p>Almacena informes, recetas y otros documentos.</p>
        </article>
        <article>
          <h3>Recordatorios</h3>
          <p>Recibe avisos sobre fechas y cuidados importantes.</p>
        </article>
      </section>

      {/* Dashboard preview */}
      <section className="dashboard-preview">
        <h2>Toda su información de un vistazo</h2>
        <p>
          Consulta fácilmente el estado de salud de tu mascota, sus próximas
          vacunas, tratamientos y citas veterinarias desde un único panel.
        </p>
        {/* Captura real de la app */}
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2>Cómo funciona</h2>
        <h3>Crea tu cuenta</h3>
        <p>Regístrate y empieza a utilizar PawCare.</p>
        <h3>Añade a tu mascota</h3>
        <p>Crea su perfil con toda su información básica.</p>
        <h3>Organiza sus cuidados</h3>
        <p>
          Registra su historial médico, controla sus vacunas y mantén
          actualizada su información.
        </p>
      </section>

      {/* FAQ's */}
      <section className="faqs">
        <h2>Preguntas frecuentes</h2>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Su bienestar empieza con un buen cuidado</h2>
        <p>
          Ten toda la información de salud de tu mascota organizada y siempre a
          mano
        </p>
      </section>
    </main>
  );
}

export default LandingPage;
