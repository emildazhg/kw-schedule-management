export const signIn = profile => {
  console.log("profile", profile);
  return { type: "SIGN_IN", payload: profile };
};

export const signOut = () => {
  return { type: "SIGN_OUT" };
};
