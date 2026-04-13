import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";

export default function PostCard({ post, className = "col-md-6 col-lg-4 col-xl-3" }) {
  return (
    <>
      <div className={className}>
        <div className="card">
          <div className="card-image">
            {/* eslint-disable-next-line */}
            <img src={post.main_picture.small} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <div className="card-footer-custom">
              <span className="card-date">
                {moment(post.publication_date).format("DD/MM/YYYY")}
              </span>
              <Link href={`/noticias/${post.slug}?id=${post.id}`}>
                <a className="card-link">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
