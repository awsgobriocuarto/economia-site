import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";

export default function PostCard({ post, className = "col-md-6 col-lg-4 col-xl-3" }) {
  return (
    <>
      <div className={className}>
        <Link href={`/noticias/${post.slug}?id=${post.id}`}>
          <a className="card-clickable-wrapper" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="card h-100 transition-all hover-shadow">
              <div className="card-image">
                {/* eslint-disable-next-line */}
                <img src={post.main_picture.small} alt="" style={{ borderRadius: '0' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ color: '#1a2840' }}>{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>
                <div className="card-footer-custom mt-auto">
                  <span className="card-date text-primary fw-semibold">
                    {moment(post.publication_date).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .card-clickable-wrapper :global(.card) {
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid #e2e8f0;
          border-radius: 0;
        }
        .card-clickable-wrapper:hover :global(.card) {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          border-color: #ff7825;
        }
        .card-clickable-wrapper:hover :global(.card-title) {
          color: #ff7825 !important;
        }
      `}</style>
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
