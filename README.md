# allnight-personality

This pkg enables your project to get personality's name of allnight-nippon that is Janpanese radio programs.

## Usage

### Install

```bash
npm i allnight-personality
```

### Import

Just declare.

```typescript
import AllnightPersonality from 'AllnightPersonality'
```

### How to get personality's name.

Fetching data processs is asynchronous.
So, please call like these.

```typescript
AllnightPersonality.init().then((personality: AllnightPersonality) => {
  const personalityName: string[] = personality.name
})
```

or

```typescript
const fetchData = async (): Promise<AllnightPersonality> => {
  const personality: AllnightPersonality = await AllnightPersonality.init()
  return personality
}

const main = async (): void => {
  const personality = await fetchData()
  const personalityName: string[] = personality.name
}
```

## Attention

This pakage use puppeteer, so it depends on the page:"https://www.allnightnippon.com/personality.html".
If it happened changes which is related with DOM, the package should not return right data.
