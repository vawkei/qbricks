const BACKEND_URL = "http://localhost:5000/api/v1/results";

export const postResult = async (resultData: any) => {
  try {
    // const response = await fetch(`${BACKEND_URL}/post-result`, {
    //   method: "POST",
    //   body: JSON.stringify(resultData),
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    // });

    // const data = await response.json();
    // console.log("data:", data);

    // if (!response.ok) {
    //   throw new Error(data.msg || "request failed");
    // }

    // return data;
    return resultData
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("postResultError:", message);
  }
};
