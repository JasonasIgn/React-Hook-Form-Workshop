export const VanillaForm = () => {
  return (
    <form>
      <h3>Vanilla Form</h3>
      <div className="formField">
        <label>First Name</label>
        <input name="firstName" />
      </div>

      <div className="formField">
        <label>Last Name</label>
        <input name="lastName" />
      </div>

      <div className="formField">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>

      <input type="submit" />
    </form>
  );
};
