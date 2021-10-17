import AllnightPersonality from './index';

describe('allnight-personality test', () => {

  const returnPersonality = async (): Promise<AllnightPersonality> => {
    const personality: AllnightPersonality = await AllnightPersonality.init();
    return personality;
  };

  test('should be type:AllnightPersonality of its instance.', async () => {
    const personality: AllnightPersonality = await returnPersonality();
    expect(personality).toBeInstanceOf(AllnightPersonality);
  });

  test('confirm to get text element', async () => {
    const personality = await returnPersonality();
    const nameNullmessage: string = 'can not get personality name.';
    const personalityName: string[] = personality.name;
    expect(personalityName).not.toContain(nameNullmessage);
  })

});
