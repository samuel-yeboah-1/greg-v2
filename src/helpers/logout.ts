export  const logout = () => {
    localStorage.removeItem("token");
    router.push("/loginPage");
  };