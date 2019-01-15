import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	keyForAttribute(key) {
		return key;
	},
	keyForRelationship(key) {
		return key;
	},
	payloadKeyFromModelName(modelName) {
		return modelName;
	},
	modelNameFromPayloadKey(modelName) {
		return modelName;
	},
});
