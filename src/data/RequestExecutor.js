// @flow

async function getRequest(url: string) {
  const data = await fetch(url);
  return await data.json();
}

export default getRequest;
