


import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import {
  HttpErrors,
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import multer from 'multer';
import path from 'path';
import { TususuarioRepository } from '../repositories';
import { Tususuario } from '../models';

export class tusCargarArchivos {
  constructor(
    @repository(TususuarioRepository) private tususuarioRepository: TususuarioRepository,
  ) { }

  /**
   *
   * @param response
   * @param request
   */
  @post('/uploadUserFile', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Función de carga másiva de usuarios.',
      },
    },
  })
  async uploadUserFile(
    @requestBody({
      description: 'multipart/form-data value.',
      required: true,
      content: {
        'multipart/form-data': {
          'x-parser': 'stream',
          schema: { type: 'object' },
        },
      },
    })
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return {};
  }

  /**
   * Get files and fields for the request
   * @param request - Http request
   */
  private static getFilesAndFields(request: Request) {
    const uploadedFiles = request.files;
    console.log(uploadedFiles);
    const mapper = (f: globalThis.Express.Multer.File) => ({
      fieldname: f.fieldname,
      originalname: f.originalname,
      encoding: f.encoding,
      mimetype: f.mimetype,
      size: f.size,
    });
    let files: object[] = [];
    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles.map(mapper);
    }
    else {
      for (const filename in uploadedFiles) {
        console.log("Alejo");
        files.push(...uploadedFiles[filename].map(mapper));
      }
    }
    return { files, fields: request.body };
  }

}