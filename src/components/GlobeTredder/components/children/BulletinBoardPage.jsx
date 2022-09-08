// react import
import React from "react";
// mock advertisement image imports
import persevere from "../media/image/persevere.png";
import webMaker from "../media/image/web-maker.png";
import w3 from "../media/image/w3-schools.png";
// 'BulletinBoardPage' child component [stateless functional]
const BulletinBoardPage = (props) => {
  return (
    <div id="bulletin-board-page" className="page">
      <span id="bulletin-board-hdr">Bulletin Board</span>
      <div id="bb-post-box">
        <span id="bb-post-box-hdr">Post A Message</span>
        <textarea
          name=""
          id="bb-post-input"
          cols="85"
          rows="08"
          placeholder={"Write a new post....."}
        ></textarea>
        <button id="bb-post-btn" className="btn btn-success">
          Post
        </button>
        <button id="bb-share-btn" className="btn btn-danger">
          Share
        </button>
      </div>
      <div id="bb-thread">
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Anthony Bosek
            <span> | {new Date(Date.now()).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Rand Walters
            <span> | {new Date(Date.now() - 86400000).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Bryan Wolf
            <span> | {new Date(Date.now() - 86400000 * 5).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Jessica Biel
            <span> | {new Date(Date.now()).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Randy Walters
            <span> | {new Date(Date.now() - 86400000).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Bryan Wolf
            <span> | {new Date(Date.now() - 86400000 * 5).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Harry Kane
            <span> | {new Date(Date.now()).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Anthony Bosek
            <span> | {new Date(Date.now() - 86400000).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
        <fieldset className="bb-thread-entry">
          <legend>
            <i className="fas fa-user-circle"></i>
            Sergio Ramos
            <span> | {new Date(Date.now() - 86400000 * 5).toDateString()}</span>
          </legend>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            commodi! Officia dicta laborum vitae recusandae obcaecati? Odio quos
            exercitationem non laudantium ea debitis suscipit laboriosam, fuga
            tempora ut mollitia maiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur reiciendis a illo perspiciatis quis
            facilis cum dolorem perferendis dolorum, incidunt laborum hic et
            rerum, aliquid nobis voluptatem nisi, ad harum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias eos debitis, unde
            assumenda aspernatur dolor illo! Et numquam cum fugit exercitationem
            veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
            voluptatibus aliquid.
          </p>
        </fieldset>
      </div>
      {/* advertisements [left-hand side] */}
      <aside id="ad-space-left">
        <div className="ad">
          <img className="ad-img" src={persevere} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={webMaker} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={w3} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={webMaker} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
      </aside>
      {/* advertisements [right-hand side] */}
      <aside id="ad-space-right">
        <div className="ad">
          <img className="ad-img" src={persevere} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={webMaker} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={w3} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
        <div className="ad">
          <img className="ad-img" src={webMaker} alt="" />
          <span>ADVERTISEMENT</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
            sit sunt aliquam, officia, voluptatibus natus totam nemo rerum id
            itaque perspiciatis voluptatum sapiente iure eligendi temporibus
            incidunt earum illo.
          </p>
        </div>
      </aside>
    </div>
  );
};
export default BulletinBoardPage;
