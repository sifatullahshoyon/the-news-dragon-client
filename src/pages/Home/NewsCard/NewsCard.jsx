import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, author, image_url, rating, details, total_view } = news;
  return (
    <>
      <Card className="my-5">
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div>
                <Image
                  src={author?.img}
                  className="img-fluid"
                  style={{ height: "40px" }}
                  roundedCircle
                />
              </div>
              <div>
                <h6>{author?.name}</h6>
                <p>
                  <small>
                    {moment(author?.published_date).format("Y-MM-DD")}
                  </small>
                </p>
              </div>
            </div>
            <div>
              <FaRegBookmark className="mr-4" />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`} className="text-warning">
                  See More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex">
            <div className="flex-grow-1">
              <Rating
                placeholderRating={rating?.number}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar />}
              />
              <span>{rating?.number}</span>
            </div>
            <div>
              <FaEye />
              {total_view}
            </div>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewsCard;
