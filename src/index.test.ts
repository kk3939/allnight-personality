import { AllnightPersonality } from './index';
describe('allnight-personality test', () => {
  test('should be type:AllnightPersonality of its instance.', () => {
    AllnightPersonality.init().then((personality) => {
      expect(personality).toBeInstanceOf(AllnightPersonality);
    });
  });
  test('confirm not being to get text element', () => {
    AllnightPersonality.init().then((personality: AllnightPersonality) => {
      const nameNullmessage: string = 'can not get personality name.';
      const personalityName: string[] = personality.name;
      expect(personalityName).not.toContain(nameNullmessage);
    });
  })

});
