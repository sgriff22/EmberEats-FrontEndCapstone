import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { deleteUser, getAllUsers } from "../../services/userService";

export const User = ({ user, setUsers }) => {
  const handleDelete = () => {
    deleteUser(user.id).then(() => {
      getAllUsers().then((res) => {
        setUsers(res);
      });
    });
  };

  return (
    <Card
      body
      color="secondary"
      style={{
        width: "15rem",
      }}
    >
      <Link to={`/profile/${user.id}`}>
        <div
          style={{
            width: "100px",
            height: "100px",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            alt="Sample"
            src={user.image}
            style={{ width: "100%", marginTop: "-15px" }}
          />
        </div>
        <CardBody>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Id#: {user.id}
          </CardSubtitle>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardText>Email: {user.email}</CardText>
        </CardBody>
      </Link>
      <Button color="light" onClick={handleDelete}>
        Delete User
      </Button>
    </Card>
  );
};
