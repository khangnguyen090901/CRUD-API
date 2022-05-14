/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Show all users in database
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Show user is found with userId
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Add new an user
 *      description: Use to request all users
 *      parameters:
 *          - in: body
 *            name: Data
 *            schema:
 *              type: object
 *              required:
 *                  - name:
 *                  - email:
 *                  - gender:
 *                  - status:
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                  gender:
 *                      type: string
 *                  status:
 *                      type: string
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Update exist user in database with userId
 *      description: Use to update a user
 *      responses:
 *          '201':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user
 *      description: Use to delete exist user in database
 *      responses:
 *          '200':
 *              description: A successful response
 */
