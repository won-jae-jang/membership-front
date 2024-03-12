const writeBtn = document.getElementById("writeBtn");

writeBtn.addEventListener("click", async (event) => {
  event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

  const title = document.getElementById("title").value;
  const cotent = document.getElementById("cotent").value;

  const response = await fetch("/boards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //글작성 api 처리 TODO
    });
});
