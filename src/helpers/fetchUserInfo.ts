const fetchUserInfo = async (userId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/auth/userinfo?userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        setUserBalance(data.balance);
        setBtcAddress(data.btcAddress);
        setUserEmail(data.email);
      } else {
        showToast("Failed to fetch user info.");
      }
    } catch (error) {
      showToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };