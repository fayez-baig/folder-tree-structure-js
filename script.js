const folderTreeContainer = document.getElementById("folder-tree-container");
const folderTree = document.getElementById("folder-tree");

const structure = {
  root: {
    folder1: {
      subfolder1: {
        nestedfolder1: {
          file1: "",
          file2: "",
        },
        nestedfolder2: {
          file3: "",
        },
      },
      subfolder2: {
        file4: "",
        file5: "",
      },
    },
    folder2: {
      file6: "",
    },
  },
};

function createFolder(name, parent) {
  const folderName = document.createElement("span");
  folderName.classList.add("folder-name");
  folderName.innerText = name;
  folderName.addEventListener("click", toggleFolderContent);

  const folderContent = document.createElement("ul");
  folderContent.classList.add("folder-content");

  const folder = document.createElement("li");
  folder.appendChild(folderName);
  folder.appendChild(folderContent);

  parent.appendChild(folder);

  return folderContent;
}

function createFile(name, parent) {
  const fileName = document.createElement("li");
  fileName.classList.add("file-name");
  fileName.innerText = name;
  parent.appendChild(fileName);
}

function createNestedFolders(structure, parent) {
  for (const key in structure) {
    if (typeof structure[key] === "object") {
      const folderContent = createFolder(key, parent);
      console.log(structure[key]);
      createNestedFolders(structure[key], folderContent);
    } else {
      createFile(key, parent);
    }
  }
}

function toggleFolderContent(event) {
  const folderName = event.target;
  const folderContent = folderName.nextElementSibling;
  folderContent.style.display =
    folderContent.style.display === "block" ? "none" : "block";
}

createNestedFolders(structure, folderTree);
