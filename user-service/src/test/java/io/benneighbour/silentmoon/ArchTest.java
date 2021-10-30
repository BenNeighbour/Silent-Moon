package io.benneighbour.silentmoon;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("io.benneighbour.silentmoon");

        noClasses()
            .that()
            .resideInAnyPackage("io.benneighbour.silentmoon.service..")
            .or()
            .resideInAnyPackage("io.benneighbour.silentmoon.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..io.benneighbour.silentmoon.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
