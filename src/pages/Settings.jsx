import Typography from "../components/helpers/Typography";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";

function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь можно собрать данные из инпутов и отправить их
    console.log("Form submitted");
  };

  return (
    <div className="settings--wrapper">
      <Typography variant="h1" color="#333333">
        Your Settings
      </Typography>

      <form className="settings--form" onSubmit={handleSubmit}>
        <Input placeholderText="Username" name="username" width="100%" />
        <Input
          placeholderText="Email Address"
          type="email"
          name="email"
          width="100%"
        />
        <textarea
          name="comment"
          id="comment--area"
          placeholder="input your comment"
        ></textarea>
        <Input placeholderText="Avatar image URL" name="avatar" width="100%" />

        <div className="form-buttons">
          <Button type="submit" withIcon={false}>
            Update Settings
          </Button>
          <Button variant="warning-small" withIcon={false}>
            or click here to logout
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
