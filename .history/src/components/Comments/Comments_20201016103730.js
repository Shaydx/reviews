import React from "react";

const Comments = () => {
  return (
    <div id="comments">
      <div className="comment container">
        <div class="rating">
          <div className="score">10</div>
        </div>
        <div class="user">
          Jesper <span>22.08.2020</span>
        </div>
        <p class="response">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          illum? Fugit vel vero nostrum deleniti fugiat rerum quisquam illo
          incidunt? Distinctio, enim. Quo consequatur, accusamus nesciunt libero
          non perspiciatis debitis?
        </p>
      </div>
      <div className="comment container">
        <div class="rating">
          <div className="score">10</div>
        </div>
        <div class="user">
          Jesper <span>22.08.2020</span>
        </div>
        <p class="response">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>
      </div>
    </div>
  );
};

export default Comments;
