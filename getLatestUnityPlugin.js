async function DownloadUnityPluginOnClick() {
        // Get package from github
        const url =
            "https://api.github.com/repos/bezi3d/bezi-unity-plugin-releases/releases/latest"
        const response = await fetch(url);
        const release = await response.json();
        // Download installer
        const assets = release.assets;
        const asset = assets.find((asset) => {
            if (asset.name.endsWith(".tgz")) return true;
            return false;
        });
        if (!asset) {
            return;
        }

        const link = document.createElement("a");
        link.target = "_blank";
        link.href = asset.browser_download_url;
        link.download = `${asset.browser_download_url}`;
        link.click();
        link.remove();
    },
}
