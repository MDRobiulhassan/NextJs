function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "robiul", url: "https://mdrobiulhassan.github.io/" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log("User Data", userData);
  } catch (error) {
    console.log("Error fetching user data", error);
  }
}

getUserData();
