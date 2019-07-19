FilePond.registerPlugin(
	FilePondPluginImagePreview,
	FilePondPluginImageResize,
	FilePondPluginFileEncode
);

FilePond.setOptions({
	stylePanelAspectRatio: 150 / 100
});

FilePond.parse(Document.body);
