// const createContainerResponse = await blobServiceClient
//   .getContainerClient(containerName)
//   .create();

import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");

// connect to blob storage
const connectToStorage = async () => {
  const accountName = "mentora";
  const accountKey = process.env.AZURE_ACCOUNT_KEY;
  if (!accountName) throw Error("Azure Storage accountName not found");
  if (!accountKey) throw Error("Azure Storage accountKey not found");

  const sharedKeyCredential = new StorageSharedKeyCredential(
    accountName,
    accountKey
  );

  const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
  );

  const containerClient = blobServiceClient.getContainerClient("course");
  return { blobServiceClient, containerClient };
};

export const getBlobClient = async (blobName) => {
  const { containerClient } = await connectToStorage();
  return containerClient.getBlockBlobClient(blobName);
};

// get names of all blob files
export const getBlobNames = async () => {
  const { containerClient } = await connectToStorage();
  const blobs = containerClient.listBlobsFlat();

  const res = [];
  for await (const item of blobs) {
    // console.log(`Blob: ${blob.name}`);
    const file = await fetch(
      `https://mentora.blob.core.windows.net/course/${item.name}`
    );

    const blobFile = await file.blob();
    // blobFile.name = item.name;
    // blobFile.lastModified = new Date();

    console.log(blobFile);

    // URL.createObjectURL(
    res.push(blobFile);
    // console.log(blobFile);
  }

  return res;
};

// download file
export const downloadBlobFile = async (blobName) => {
  const blobClient = await getBlobClient(blobName);

  // download file
  await blobClient.downloadToFile(blobName);
};

// upload new file
// delete file
