import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";

export default function PostCard({ post }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-image">
            {/* eslint-disable-next-line */}
            <img src={post.main_picture.small} alt="" />
          </div>
          <div className="card-body">
            <div className="card-pretitle">
              {moment(post.publication_date).format("DD/MM/YYYY")}
            </div>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <Link href={`/noticias/${post.slug}?id=${post.id}`}>
              <a className="btn btn-dark btn-sm text-white">ver más</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
