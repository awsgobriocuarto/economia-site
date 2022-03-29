import Link from "next/link";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-image">
            <img src={post.main_picture.small} alt="" />
          </div>
          <div className="card-body">
            <small>{post.publication_date}</small>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <Link href={`/noticias/${post.slug}?id=${post.id}`}>
              <a className="btn btn-dark btn-sm text-white">ver más</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
              alt=""
            />
          </div>
          <div className="card-body">
            <small>2022-03-08</small>
            <h5 className="card-title">Lorem ipsum dolor sit.</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              enim, aperiam alias rem asperiores rerum. Nostrum aut at esse
              quae.
            </p>
            <Link href={`/noticias/${post.slug}`}>
              <a className="btn btn-dark btn-sm text-white">ver más</a>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
