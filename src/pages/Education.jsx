import { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Media from '../components/Media';
import Modal from '../components/Modal';
import PageHeader from '../components/PageHeader';
import TagList from '../components/TagList';
import { education } from '../content/education';
import { useLanguage } from '../context/LanguageContext';
import { formatRange } from '../utils/dates';

/** Contenido del modal: materias exoneradas con sus créditos y materias en curso. */
function CoursesDetail({ courses }) {
  const { t } = useLanguage();
  const totalCredits = courses.approved.reduce((sum, course) => sum + (course.credits ?? 0), 0);

  return (
    <div className="courses">
      <section>
        <h3 className="courses__title">
          {t('education.modalApproved')}
          <span className="courses__count">
            {totalCredits} {t('education.credits')}
          </span>
        </h3>
        <ul className="courses__list">
          {courses.approved.map((course) => (
            <li key={course.name}>
              <span>{course.name}</span>
              <span className="courses__credits">
                {course.credits} {t('education.credits')}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {courses.inProgress?.length > 0 && (
        <section>
          <h3 className="courses__title">{t('education.modalInProgress')}</h3>
          <ul className="courses__list">
            {courses.inProgress.map((course) => (
              <li key={course.name}>
                <span>{course.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function Education() {
  const { lang, t, pick } = useLanguage();
  const [openEntry, setOpenEntry] = useState(null);
  const [openCertificate, setOpenCertificate] = useState(null);
  const [openInfo, setOpenInfo] = useState(null);

  return (
    <section className="page">
      <PageHeader title={t('nav.education')} />

      <ol className="timeline">
        {education.map((entry) => {
          const clickable = Boolean(entry.courses);
          // `null` = la entrada no lleva certificado; `''` = pendiente de subir.
          const showsCertificate = entry.certificate !== null;

          return (
            <li key={entry.id} className="timeline__item">
              <span className="timeline__marker" aria-hidden="true" />

              <div className={`education-row ${showsCertificate ? '' : 'education-row--solo'}`}>
                {/* Con materias cargadas la tarjeta es un botón que abre el modal. */}
                <div
                  className={`timeline__body card ${clickable ? 'is-clickable' : ''}`}
                  onClick={clickable ? () => setOpenEntry(entry) : undefined}
                  onKeyDown={
                    clickable
                      ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setOpenEntry(entry);
                          }
                        }
                      : undefined
                  }
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                >
                  <div className="timeline__head">
                    <div>
                      <h2 className="timeline__title">{pick(entry.title)}</h2>
                      <p className="timeline__meta">{entry.institution}</p>
                    </div>

                    <div className="timeline__head-actions">
                      <span className="date-chip">
                        {formatRange(entry.start, entry.end, lang, t('education.inProgress'))}
                      </span>
                      {entry.info && (
                        <button
                          type="button"
                          className="icon-button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setOpenInfo(entry);
                          }}
                          aria-label={t('moreInfo')}
                        >
                          <IoInformationCircleOutline />
                        </button>
                      )}
                    </div>
                  </div>

                  {clickable && <p className="timeline__hint">{t('education.seeDetail')} →</p>}

                  {/* Las tecnologías admiten string o campo bilingüe, así que se resuelven acá. */}
                  <TagList items={(entry.tech ?? []).map(pick)} />
                </div>

                {showsCertificate && (
                  <figure
                    className={`certificate ${entry.certificate ? 'is-clickable' : ''}`}
                    onClick={entry.certificate ? () => setOpenCertificate(entry) : undefined}
                    onKeyDown={
                      entry.certificate
                        ? (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              setOpenCertificate(entry);
                            }
                          }
                        : undefined
                    }
                    role={entry.certificate ? 'button' : undefined}
                    tabIndex={entry.certificate ? 0 : undefined}
                    aria-label={entry.certificate ? t('education.viewCertificate') : undefined}
                  >
                    <Media
                      src={entry.certificate}
                      alt={`${t('education.certificate')} — ${entry.institution}`}
                      ratio="4 / 3"
                      fallbackLabel={t('education.noCertificate')}
                    />
                  </figure>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <Modal
        open={Boolean(openEntry)}
        onClose={() => setOpenEntry(null)}
        title={openEntry ? pick(openEntry.title) : ''}
      >
        {openEntry?.courses && <CoursesDetail courses={openEntry.courses} />}
      </Modal>

      <Modal
        open={Boolean(openCertificate)}
        onClose={() => setOpenCertificate(null)}
        title={openCertificate ? `${t('education.certificate')} — ${openCertificate.institution}` : ''}
      >
        {openCertificate && (
          <img
            src={openCertificate.certificate}
            alt={`${t('education.certificate')} — ${openCertificate.institution}`}
            className="certificate-modal__image"
          />
        )}
      </Modal>

      <Modal open={Boolean(openInfo)} onClose={() => setOpenInfo(null)} title={openInfo ? pick(openInfo.title) : ''}>
        {openInfo?.info && (
          <ul className="bullets">
            {pick(openInfo.info).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
}

export default Education;
