import { TextField, Button } from "@mui/material";

const Form = () => {
  return (
    <form
      className="absolute top-[1165px] left-[122px] bg-gray-1500 overflow-hidden flex flex-col p-[31px_34px] box-border items-center justify-center gap-[32px]"
      id="form"
    >
      <TextField
        className="[border:none] bg-[transparent] relative"
        sx={{ width: 428.5541687011719 }}
        color="success"
        variant="standard"
        type="text"
        label="Full name"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="[border:none] bg-[transparent] relative"
        sx={{ width: 428.5541687011719 }}
        color="success"
        variant="filled"
        type="text"
        label="E-mail"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="[border:none] bg-[transparent] relative"
        sx={{ width: 428.5541687011719 }}
        color="success"
        variant="filled"
        type="text"
        label="Mobile no."
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="relative"
        sx={{ width: 429.43780517578125 }}
        color="success"
        variant="standard"
        multiline
        rows={4}
        maxRows={7}
        label="Enter your message.."
        placeholder="Textarea placeholder"
        margin="none"
        required
      />
      <Button
        className="relative"
        sx={{ width: 165 }}
        variant="contained"
        color="success"
      >
        Send
      </Button>
    </form>
  );
};

export default Form;
