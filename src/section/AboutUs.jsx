import style from "./AboutUs.module.css";
import styleHome from "../section/Home.module.css";

import { brands } from "../data/brands";
import { families } from "../data/families";

export default function AboutUS() {
  return (
    <section id="aboutUs" className={style.about}>
      <h2>à propos de nous !</h2>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        exercitationem, magnam beatae nihil tenetur iusto minus reprehenderit
        perferendis facilis tempora quae quos natus in fugit, quidem provident
        quisquam quo assumenda culpa quasi omnis necessitatibus doloremque
        similique nulla! Labore ullam eaque rerum explicabo a, temporibus
        facilis earum praesentium voluptatum harum optio voluptatibus
        voluptatem? Illo, ex temporibus.
      </p>

      <h3>Nos Marques</h3>
      <div className={styleHome.grid}>
        {brands.map((b) => (
          <div className={styleHome.card} key={b.id}>
            <img src={b.image} alt="" />
            <h4>{b.name}</h4>
          </div>
        ))}
      </div>

      <h3>Nos Familles</h3>
      <div className={styleHome.grid}>
        {families.map((b) => (
          <div className={styleHome.card} key={b.id}>
            <img src={b.image} alt="" />
            <h4>{b.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
