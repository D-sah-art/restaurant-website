import React from 'react'

const dishes = [
  {
    name: 'Herb-Grilled Paneer',
    desc: 'Char-grilled paneer with a lemon-herb glaze, served with warm naan.'
  },
  {
    name: 'Spicy Tomato Pasta',
    desc: 'Penne tossed in a roasted tomato-chili sauce, topped with parmesan.'
  },
  {
    name: 'Classic Caesar Salad',
    desc: 'Crisp romaine, garlic croutons, shaved parmesan and creamy dressing.'
  }
]

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="brand">
          <h1>La Table</h1>
          <p className="tag">Comfort food · Modern flavors</p>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h2>Welcome to La Table</h2>
          <p>Fresh ingredients. Simple recipes. Beautiful flavors.</p>
          <img
            alt="restaurant-interior"
            src="https://images.unsplash.com/photo-1555992336-c4a6a0d5e3a9?auto=format&fit=crop&w=1200&q=60"
          />
        </section>

        <section id="about" className="about">
          <h3>About Us</h3>
          <p>
            La Table is a small neighbourhood restaurant serving a fusion of
            continental and Indian-inspired dishes. We focus on seasonal
            produce, sustainable sourcing, and cooking that feels like home.
          </p>
        </section>

        <section id="menu" className="menu">
          <h3>Our Menu</h3>
          <div className="dishes">
            {dishes.map((d, i) => (
              <article key={i} className="dish">
                <h4>{d.name}</h4>
                <p>{d.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h3>Contact</h3>
          <p>Phone: +91-98765-43210</p>
          <p>Email: hello@latable.example</p>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <label>
              Your name
              <input type="text" placeholder="Name" />
            </label>
            <label>
              Your message
              <textarea placeholder="Message"></textarea> 
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} La Table — hello@latable.example</p>
        <p>Address: 123 Food Lane, YourCity</p>
      </footer>
    </div>
  )
}