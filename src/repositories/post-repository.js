const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function retrievePosts() {
  return await prisma.post.findMany();
}

async function retrievePost(id) {
  return await prisma.post.findUnique({
    where: { id },
  });
}

async function savePost(data) {
  return await prisma.post.create({ data });
}

async function updatePost(id, data) {
  return await prisma.post.update({
    where: { id },
    data,
  });
}

async function deletePost(id) {
  return await prisma.post.delete({
    where: { id },
  });
}

module.exports = {
  retrievePosts,
  retrievePost,
  savePost,
  updatePost,
  deletePost,
};
