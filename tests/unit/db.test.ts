import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Prisma test:', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
  test('User creation', async () => {
    const user = await prisma.user.create({
      data: {
        email: 'test@test.com',
        password: 'test',
        firstName: 'testFirstName',
        lastName: 'testLastName',
      },
    });

    expect(user.email).toBe('test@test.com');
    expect(user.role).toBe('USER');

    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
  });
});
