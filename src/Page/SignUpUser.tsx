import { GlobalContext } from "@/Hooks/GlobalContext";
import React from "react";
import { useContext } from "react";

const SignUpUser = () => {
  return (
    <SignupForm
      user={signup}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isSubmitting={isSubmitting}
      successMessage={successMessage}
      errors={errors}
    />
  );
};

export default SignUpUser;
