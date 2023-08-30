import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* home 1 */}
      <div className="home" id="home">
        <main>
          <h1>TechyStart</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      {/* home 2 */}
      <div className="home2">
        <img
          src={
            "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
          }
          alt="Graphics"
        />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in childern.
          </p>
        </div>
      </div>

      {/* home 3 */}
      <div className="home3" id="about">
        <div>
          <h1>Who are you</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            quidem ratione odit repellendus a maiores quas dolore voluptas
            tempora vel saepe aliquam minima ea veritatis adipisci nesciunt
            harum obcaecati corrupti molestias. Voluptatibus nam consectetur
            alias assumenda harum! Consectetur, ab sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque exercitationem, voluptatum quis, esse aliquid aliquam illo, voluptates velit veritatis error voluptate fugiat earum perferendis eos et! Excepturi, impedit magni optio quidem vero quibusdam odio ea eum sequi dolor labore assumenda, libero repellat animi sunt quisquam earum officiis nobis maxime. Sit sunt enim libero dolorem rerum repellendus quaerat eaque vel consequatur soluta cumque repellat, ad facilis natus amet perspiciatis nihil et neque culpa commodi laudantium nam. Consectetur iure exercitationem adipisci eaque delectus placeat possimus minima quos pariatur magni excepturi commodi fugiat eius voluptas cupiditate dignissimos, culpa quis quod et in.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, totam cum libero atque deleniti expedita illo odit aliquam. Dicta eligendi perspiciatis hic amet ipsum saepe quibusdam, voluptate ipsam perferendis necessitatibus officia ducimus harum magni odit omnis labore beatae at quia tenetur alias. Nostrum, nesciunt reprehenderit hic deleniti numquam ducimus? Molestiae enim quibusdam excepturi quos alias eos ipsum soluta cum fugit nostrum? Explicabo dignissimos tenetur repellendus voluptatem sit enim at suscipit debitis voluptatibus autem error dolores ut nihil libero provident, similique eaque sequi, optio numquam esse? Dicta soluta nostrum, temporibus, minima ratione perferendis ab quia corporis architecto saepe sunt consectetur omnis.
          </p>
        </div>
      </div>

      {/* home 4 */}

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1.3s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
