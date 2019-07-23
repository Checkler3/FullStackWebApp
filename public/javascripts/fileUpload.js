FilePond.registerPlugin(
	FilePondPluginImagePreview,
	FilePondPluginImageResize,
	FilePondPluginFileEncode
);

FilePond.registerPlugin(FilePondPluginFileEncode);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginImagePreview);

FilePond.setOptions({
	stylePanelAspectRatio: 150 / 100
});

FilePond.parse(Document.body);
