import { brands } from "../data/brands";
import { families } from "../data/families";

import style from "./Home.module.css";
export default function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.slogan}>
        <h1>Bienvenue dans notre univers eCom App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          quidem accusantium, est voluptatum ducimus explicabo odio aperiam
          rerum ratione nulla velit sapiente veritatis asperiores, ipsum
          dignissimos. Accusantium mollitia neque maiores aperiam, autem alias.
        </p>
      </div>
      <div className={style.bestof}>
        <div>
          <h3>Nos meilleures marques</h3>

          <div className={style.grid}>
            {brands.slice(0, 3).map((b) => (
              <div className={style.card} key={b.id}>
                <img src={b.image} alt="" />
                <h4>{b.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Nos meilleures familles</h3>
          <div className={style.grid}>
            {families.slice(0, 3).map((f) => (
              <div className={style.card} key={f.id}>
                <img src={f.image} alt="" />
                <h4>{f.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
